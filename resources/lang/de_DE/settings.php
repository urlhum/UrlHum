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
  'reserved_help' => 'Benutzer können reservierte Kurz-URLs nicht in eigenen Weiterleitungen verwenden',
  'reserved_restore' => 'Standardeinstellung wiederherstellen',
  'privacy_policy_desc' => 'Schreiben Sie hier Ihre Datenschutzerklärung. Normale HTML-Tags sind erlaubt.',
  'tos_desc' => 'Schreiben Sie hier Ihre Nutzungsbedingungen. Normale HTML-Tags sind erlaubt.',
  'require_user_verify' => 'E-Mail Verifizierung von Benutzern ist für das Management von Short-URLs erforderlich',
  'require_user_verify_help' => 'Benutzer mit nicht verifizierter E-Mail Adresse dürfen keine Kurz-URLs erstellen, bearbeiten und verwalten',
  'custom_html' => 'Benutzerdefiniertes HTML, JS und CSS',
  'custom_html_help' => 'Schreiben Sie hier ein eigenes Skript, welches in der Fußzeile der Website geladen wird.',
  'save_changes' => 'Änderungen speichern',
  'success' => 'Die Einstellungen wurden erfolgreich aktualisiert!',
];
