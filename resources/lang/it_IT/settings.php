<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

return [
  'settings' => 'Impostazioni',
  'system' => 'Impostazioni di Sistema',
  'anon_hash_alert' => 'Attenzione: se anonimizzi l\'indirizzo IP senza effettuare il relativo hashing, le funzioni di analitica non potranno contare i click reali, in quanto sarebbe impossibile determinare l\'indirizzo IP dell\'utente.',
  'general' => 'Generale',
  'website_name' => 'Nome Sito web',
  'website_image' => 'Immagine sito web',
  'website_favicon' => 'Favicon sito web',
  'private' => 'Imposta il sito come privato',
  'private_help' => 'La homepage del sito reindirizzerà alla pagina d\'accesso',
  'unauthorized_redirect' => 'Unauthorized Redirect URL',
  'unauthorized_redirect_help' => 'The URL to redirect unauthorized users.',
  'unauthorized_redirect_placeholder' => 'Defaults to /login',
  'registration' => 'Abilita registrazione utenti',
  'public' => 'Mostra gli ultimi URL pubblici nella homepage ospiti',
  'public_help' => 'Mostra un widget con gli ultimi URL pubblici nella homepage',
  'privacy_policy' => 'Abilita pagina Privacy Policy',
  'privacy_policy_edit' => 'Modfica Privacy Policy',
  'tos' => 'Abilita pagina Termini di Utilizzo',
  'tos_edit' => 'Modifica Termini di Utilizzo',
  'hash' => 'Effettua l\'hashing degli indirizzi IP nel database',
  'hash_anon_help' => 'Se vivi nell\'UE questa opzione è consigliata per aderire al GDPR',
  'anonymize_ip' => 'Durante l\'elaborazione del paese dell\'indirizzo IP, anonimizzalo',
  'anonymous' => 'Permetti la creazione anonima di Short URL',
  'anonymous_help' => 'Gli utenti non registrati potranno creare URL',
  'disable_referers' => 'Disabilita Referer',
  'disable_referers_help' => 'UrlHum non salverà più i referer HTTP inviati dal browser degli utenti',
  'deleted' => 'Gli URL eliminati potranno essere ricreati?',
  'reserved' => 'Short URL riservati (uno per riga)',
  'reserved_help' => 'Gli utenti non potranno creare questi Short URL personalizzati',
  'reserved_restore' => 'Ripristina Predefiniti',
  'privacy_policy_desc' => 'Digita la tua Privacy Policy qui. L\'HTML standard è permesso.',
  'tos_desc' => 'Digita i tuoi Termini di Utilizzo qui. L\'HTML standard è permesso.',
  'require_user_verify' => 'Richiedi la verifica dell\'email utente per la gestione degli Short URL',
  'require_user_verify_help' => 'Gli utenti con indirizzo email non verificato non potranno creare, modificare e gestire i propri Short URL',
  'custom_html' => 'HTML, JS e CSS personalizzati',
  'custom_html_help' => 'Scrivi il tuo script personalizzato qui. Verrà caricato nel footer del sito web.',
  'save_changes' => 'Salva cambiamenti',
  'success' => 'Impostazioni aggiornate con successo!',
];
