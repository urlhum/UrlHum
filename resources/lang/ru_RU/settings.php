<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

return [
  'settings' => 'Настройки',
  'system' => 'Системные настройки',
  'anon_hash_alert' => 'Внимание: если вы анонимизируете IP без хэширования, аналитика не сможет считать реальные клики, потому что невозможно проверить IP пользователя.',
  'general' => 'Общее',
  'website_name' => 'Название сайта',
  'website_image' => 'Логотип сайта',
  'website_favicon' => 'Фавикон сайта',
  'private' => 'Сделать сайт приватным',
  'private_help' => 'Домашняя страница сайта будет перенаправлена на страницу Входа',
  'unauthorized_redirect' => 'Unauthorized Redirect URL',
  'unauthorized_redirect_help' => 'The URL to redirect unauthorized users.',
  'unauthorized_redirect_placeholder' => 'Defaults to /login',
  'registration' => 'Включить регистрацию пользователей',
  'public' => 'Показывать публичные URL-адреса на главной странице сайта для гостей',
  'public_help' => 'Показывать виджет с последними короткими URL на главной странице сайта',
  'privacy_policy' => 'Включить страницу политики конфиденциальности',
  'privacy_policy_edit' => 'Редактировать страницу с Политикой конфиденциальности',
  'tos' => 'Включить страницу Условия использования',
  'tos_edit' => 'Изменить TOS',
  'hash' => 'Кешировать IP адреса в базе данных',
  'hash_anon_help' => 'Если вы из ЕС, рекомендуется соблюдать GDPR',
  'anonymize_ip' => 'Анонимизировать IP адреса при получении страны IP',
  'anonymous' => 'Разрешить анонимное создание коротких URL',
  'anonymous_help' => 'Не зарегистрированные пользователи смогут создавать короткие URL-адреса',
  'disable_referers' => 'Отключить рефералов',
  'disable_referers_help' => 'UrlHum не сохранит больше HTTP-рефералов, отправленных браузером пользователей',
  'deleted' => 'Можно ли снова создавать удаленные URL?',
  'reserved' => 'Зарезервированные короткие URL (один в строке)',
  'reserved_help' => 'Пользователи не смогут создавать эти собственные короткие URL-адреса.',
  'reserved_restore' => 'Восстановить значения по умолчанию',
  'privacy_policy_desc' => 'Напишите свою Политику конфиденциальности здесь. Стандартный HTML разрешен.',
  'tos_desc' => 'Напишите свои Условия использования здесь. Стандартный HTML разрешен.',
  'require_user_verify' => 'Требовать проверки эл.почты пользователей, чтобы разрешить управление короткими URL',
  'require_user_verify_help' => 'Не подтвержденный адрес эл.почты пользователей не будет разрешен создавать, редактировать и управлять их короткими URL-адресами',
  'custom_html' => 'Пользовательский HTML, JS и CSS',
  'custom_html_help' => 'Напишите свой собственный скрипт здесь. Он будет загружен в футере сайта.',
  'save_changes' => 'Сохранить изменения',
  'success' => 'Настройки успешно обновлены!',
];
