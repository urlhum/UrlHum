<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

return [
  'settings' => 'Ajustes',
  'system' => 'Ajustes del sistema',
  'anon_hash_alert' => 'Atención: si usted anónima la IP sin anularla, Analytics no podrá contar los clics reales, ya que es imposible verificar la IP del usuario.',
  'general' => 'General',
  'website_name' => 'Nombre del Sitio Web',
  'website_image' => 'Imagen del sitio web',
  'website_favicon' => 'Website favicon',
  'private' => 'Hacer sitio web privado',
  'private_help' => 'La página de inicio del sitio web redireccionará al inicio de sesión.',
  'unauthorized_redirect' => 'Unauthorized Redirect URL',
  'unauthorized_redirect_help' => 'The URL to redirect unauthorized users.',
  'unauthorized_redirect_placeholder' => 'Defaults to /login',
  'registration' => 'Habilitar registro de usuarios',
  'public' => 'Mostrar las últimas URL creadas públicamente en la página principal de invitados',
  'public_help' => 'Muestra un widget con las últimas URLS en la página de inicio del sitio web.',
  'privacy_policy' => 'Habilitar página de política de privacidad',
  'privacy_policy_edit' => 'Editar política de privacidad',
  'tos' => 'Habilitar página de términos de uso',
  'tos_edit' => 'Editar TOS',
  'hash' => 'Hash direcciones IP en la base de datos',
  'hash_anon_help' => 'Si eres de la UE, se recomienda cumplir con GDPR.',
  'anonymize_ip' => 'Anonimizar direcciones IP al obtener la IP del país',
  'anonymous' => 'Permitir la creación anónima de short URLs',
  'anonymous_help' => 'Los usuarios no registrados podrán crear URLs.',
  'disable_referers' => 'Desactivar Referers',
  'disable_referers_help' => 'UrlHum will not save anymore HTTP referers sent by users\' browser',
  'deleted' => '¿Se pueden volver a crear las URL eliminadas?',
  'reserved' => 'Direcciones short URL reservadas (una por línea)',
  'reserved_help' => 'Los usuarios no podrán crear short URL personalizadas',
  'reserved_restore' => 'Restaurar predeterminado',
  'privacy_policy_desc' => 'Escriba su política de privacidad aquí. Se permite HTML estándar.',
  'tos_desc' => 'Escriba sus Términos de Uso aquí. Se permite HTML estándar.',
  'require_user_verify' => 'Require users email verification to allow Short URLs management',
  'require_user_verify_help' => 'Unverified users email address will not be allowed to create, edit and manage their Short URLs',
  'custom_html' => 'Custom HTML, JS and CSS',
  'custom_html_help' => 'Write your custom script here. It will be loaded in the website footer.',
  'save_changes' => 'Guardar cambios',
  'success' => 'Configuraciones exitosamente actualizadas!',
];
