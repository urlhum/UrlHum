<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

return [
  'settings' => 'Einstellungen',
  'system' => 'Systemeinstellungen',
  'anon_hash_alert' => 'Achtung: Wenn Sie die IP-Adresse anonymisieren ohne sie zu hashen, kann die Statistik keine echten Klicks auswerten, da es unmöglich ist, die IP-Adresse des Benutzers zu überprüfen.',
  'general' => 'Allgemein',
  'website_name' => 'Name der Website',
  'website_image' => 'Bild der Website',
  'website_favicon' => 'Favicon der Website',
  'private' => 'Website privat schalten',
  'private_help' => 'Die Hauptseite der Website wird auf die Login-Seite weitergeleitet',
  'unauthorized_redirect' => 'URL für unberechtigte Benutzer',
  'unauthorized_redirect_help' => 'URL auf welche unberechtigte Benutzer umgeleitet werden sollen.',
  'unauthorized_redirect_placeholder' => 'Standard ist /login',
  'registration' => 'Benutzer-Registrierung aktivieren',
  'public' => 'Zeigt die neuesten öffentlich erstellten URLs auf der Gäste-Hauptseite',
  'public_help' => 'Zeigt ein Widget mit den neuesten URLs auf der Hauptseite',
  'privacy_policy' => 'Seite mit Datenschutzerklärung aktivieren',
  'privacy_policy_edit' => 'Datenschutzerklärung bearbeiten',
  'tos' => 'Seite mit Nutzungsbedingungen aktivieren',
  'tos_edit' => 'Nutzungsbedingungen bearbeiten',
  'hash' => 'IP-Adressen in Datenbank hashen',
  'hash_anon_help' => 'Wenn Sie aus der EU stammen ist dies empfohlen, um der GDPR nachzukommen',
  'anonymize_ip' => 'IP-Adressen anonymisieren, wenn das Herkunftsland abgefragt wird',
  'anonymous' => 'Anonyme Erstellung von Kurz-URLs erlauben',
  'anonymous_help' => 'Nicht registrierte Benutzer können URLs erstellen',
  'disable_referers' => 'Referrer deaktivieren',
  'disable_referers_help' => 'UrlHum wird keine Referrer speichern, die vom Browser des Benutzers mitgesendet werden',
  'deleted' => 'Dürfen gelöschte URLs erneut erstellt werden?',
  'reserved' => 'Reservierte Kurz-URLs (eine pro Zeile)',
  'reserved_help' => 'Users will not be able to create these custom Short Urls',
  'reserved_restore' => 'Restore Default',
  'privacy_policy_desc' => 'Write your Privacy Policy here. Standard HTML is allowed.',
  'tos_desc' => 'Write your Terms Of Use here. Standard HTML is allowed.',
  'require_user_verify' => 'Require users email verification to allow Short URLs management',
  'require_user_verify_help' => 'Unverified users email address will not be allowed to create, edit and manage their Short URLs',
  'custom_html' => 'Custom HTML, JS and CSS',
  'custom_html_help' => 'Write your custom script here. It will be loaded in the website footer.',
  'save_changes' => 'Save changes',
  'success' => 'Settings successfully updated!',
];
