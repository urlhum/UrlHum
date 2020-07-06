<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

return [
  'settings' => 'Ρυθμίσεις',
  'system' => 'Ρυθμίσεις Συστήματος',
  'anon_hash_alert' => 'Attention: if you anonymize the IP without hashing it, Analytics will not be able to count Real Clicks, because it is impossible to check the user IP.',
  'general' => 'Γενικά',
  'website_name' => 'Website name',
  'website_image' => 'Website image',
  'website_favicon' => 'Website favicon',
  'private' => 'Make website private',
  'private_help' => 'The website homepage will redirect to the login',
  'unauthorized_redirect' => 'Unauthorized Redirect URL',
  'unauthorized_redirect_help' => 'The URL to redirect unauthorized users.',
  'unauthorized_redirect_placeholder' => 'Defaults to /login',
  'registration' => 'Enable users registration',
  'public' => 'Show latests public created URLs in guests homepage',
  'public_help' => 'Show a widget with latests URLS in the website homepage',
  'privacy_policy' => 'Enable Privacy Policy Page',
  'privacy_policy_edit' => 'Edit Privacy Policy',
  'tos' => 'Enable Terms of Use Page',
  'tos_edit' => 'Edit TOS',
  'hash' => 'Hash IP addresses in Database',
  'hash_anon_help' => 'If you\'re from EU this is recommended to comply with GDPR',
  'anonymize_ip' => 'Anonymize IP addresses when getting IP\'s Country',
  'anonymous' => 'Allow anonymous creation of Short URLs',
  'anonymous_help' => 'Not registered users will be able to create URLs',
  'disable_referers' => 'Disable Referers',
  'disable_referers_help' => 'UrlHum will not save anymore HTTP referers sent by users\' browser',
  'deleted' => 'Can deleted URLs be created again?',
  'reserved' => 'Reserved Short URLs (one per line)',
  'reserved_help' => 'Users will not be able to create these custom Short Urls',
  'reserved_restore' => 'Επαναφορά Προεπιλογών',
  'privacy_policy_desc' => 'Write your Privacy Policy here. Standard HTML is allowed.',
  'tos_desc' => 'Write your Terms Of Use here. Standard HTML is allowed.',
  'require_user_verify' => 'Require users email verification to allow Short URLs management',
  'require_user_verify_help' => 'Unverified users email address will not be allowed to create, edit and manage their Short URLs',
  'custom_html' => 'Custom HTML, JS and CSS',
  'custom_html_help' => 'Write your custom script here. It will be loaded in the website footer.',
  'save_changes' => 'Αποθήκευση αλλαγών',
  'success' => 'Οι Ρυθμίσεις ενημερώθηκαν με επιτυχία!',
];
