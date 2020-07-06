<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

return [
  'settings' => '设置',
  'system' => '系统设置',
  'anon_hash_alert' => '注意：如果您对IP进行匿名处理而不进行哈希处理，则分析将无法统计实际点击次数，因为无法检测用户IP。',
  'general' => '概览',
  'website_name' => '网站名称',
  'website_image' => '网站图片',
  'website_favicon' => 'Website favicon',
  'private' => '使网站私密',
  'private_help' => '网站首页将重定向到登录页',
  'unauthorized_redirect' => 'Unauthorized Redirect URL',
  'unauthorized_redirect_help' => 'The URL to redirect unauthorized users.',
  'unauthorized_redirect_placeholder' => 'Defaults to /login',
  'registration' => '启用用户注册',
  'public' => '在访客首页中显示最近公开创建的URL',
  'public_help' => '在网站主页中显示有最新URLS的小挂件',
  'privacy_policy' => '启用隐私政策页面',
  'privacy_policy_edit' => '编辑隐私政策',
  'tos' => '启用使用条款页面',
  'tos_edit' => '编辑使用条款',
  'hash' => '在数据库中Hash(哈希) IP地址',
  'hash_anon_help' => '如果您来自欧盟国家，建议遵守GDPR',
  'anonymize_ip' => '获取IP的国家/地区时匿名化IP地址',
  'anonymous' => '允许匿名创建短网址',
  'anonymous_help' => '允许未登录的用户创建短链接',
  'disable_referers' => 'Disable Referers',
  'disable_referers_help' => 'UrlHum will not save anymore HTTP referers sent by users\' browser',
  'deleted' => '删除的URL能否被再次创建？',
  'reserved' => '保留的短网址（每行一个）',
  'reserved_help' => '用户将无法创建这些短链接',
  'reserved_restore' => '恢复默认',
  'privacy_policy_desc' => '在此处编辑您的隐私政策，可以使用HTML语言',
  'tos_desc' => '在此处编辑您的使用条款，可以使用HTML语言',
  'require_user_verify' => 'Require users email verification to allow Short URLs management',
  'require_user_verify_help' => 'Unverified users email address will not be allowed to create, edit and manage their Short URLs',
  'custom_html' => 'Custom HTML, JS and CSS',
  'custom_html_help' => 'Write your custom script here. It will be loaded in the website footer.',
  'save_changes' => '保存更改',
  'success' => '设置已更新！',
];
