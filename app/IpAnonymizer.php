<?php
/**
 *    MIT License.
 *
 *    Copyright (c) 2018 Geert Wirken
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a copy
 *    of this software and associated documentation files (the "Software"), to deal
 *    in the Software without restriction, including without limitation the rights
 *    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *    copies of the Software, and to permit persons to whom the Software is
 *    furnished to do so, subject to the following conditions:
 *    The above copyright notice and this permission notice shall be included in all
 *    copies or substantial portions of the Software.
 *
 * @author Geert Wirken (https://github.com/geertw)
 *
 * https://github.com/geertw/php-ip-anonymizer
 *
 * Package of UrlHum
 */

namespace App;

/**
 * Class IpAnonymizer.
 */
class IpAnonymizer
{
    /**
     * @var string IPv4 netmask used to anonymize IPv4 address.
     */
    public $ipv4NetMask = '255.255.255.0';
    /**
     * @var string IPv6 netmask used to anonymize IPv6 address.
     */
    public $ipv6NetMask = 'ffff:ffff:ffff:ffff:0000:0000:0000:0000';

    /**
     * Anonymize an IPv4 or IPv6 address.
     *
     * @param $address string IP address that must be anonymized
     * @return string The anonymized IP address. Returns an empty string when the IP address is invalid.
     */
    public static function anonymizeIp($address)
    {
        $anonymizer = new self();

        return $anonymizer->anonymize($address);
    }

    /**
     * Anonymize an IPv4 or IPv6 address.
     *
     * @param $address string IP address that must be anonymized
     * @return string The anonymized IP address. Returns an empty string when the IP address is invalid.
     */
    public function anonymize($address)
    {
        $packedAddress = inet_pton($address);
        if (strlen($packedAddress) == 4) {
            return $this->anonymizeIPv4($address);
        } elseif (strlen($packedAddress) == 16) {
            return $this->anonymizeIPv6($address);
        } else {
            return '';
        }
    }

    /**
     * Anonymize an IPv4 address.
     * @param $address string IPv4 address
     * @return string Anonymized address
     */
    public function anonymizeIPv4($address)
    {
        return inet_ntop(inet_pton($address) & inet_pton($this->ipv4NetMask));
    }

    /**
     * Anonymize an IPv6 address.
     * @param $address string IPv6 address
     * @return string Anonymized address
     */
    public function anonymizeIPv6($address)
    {
        return inet_ntop(inet_pton($address) & inet_pton($this->ipv6NetMask));
    }
}
