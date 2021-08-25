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
  'anon_hash_alert' => '注意：如果您不进行哈希处理后匿名IP，则分析将无法统计实际点击次数，因为无法检测用户IP。',
  'general' => '概览',
  'website_name' => '网站名称',
  'website_image' => '网站图片',
  'website_favicon' => '网站图标',
  'private' => '使网站私密',
  'private_help' => '网站首页将重定向到登录页',
  'unauthorized_redirect' => 'Unauthorized Redirect URL',
  'unauthorized_redirect_help' => 'The URL to redirect unauthorized users.',
  'unauthorized_redirect_placeholder' => 'Defaults to /login',
  'registration' => '启用用户注册',
  'public' => '在访客首页中显示最近公开创建的URL',
  'public_help' => '在网站主页中公开最新短链接',
  'privacy_policy' => '启用隐私政策页面',
  'privacy_policy_edit' => '编辑隐私政策',
  'tos' => '启用使用条款页面',
  'tos_edit' => '编辑使用条款',
  'hash' => '在数据库中Hash(哈希) IP地址',
  'hash_anon_help' => '如果您来自欧盟国家，建议遵守GDPR',
  'anonymize_ip' => '获取IP的国家/地区时匿名化IP地址',
  'anonymous' => '允许匿名创建短网址',
  'anonymous_help' => '允许未登录的用户创建短链接',
  'disable_referers' => '禁用页面来源',
  'disable_referers_help' => 'UrlHum 将不再储存用户浏览器的页面来源信息',
  'deleted' => '删除的URL能否被再次创建？',
  'reserved' => '保留的短网址（每行一个）',
  'reserved_help' => '用户将无法创建这些短链接',
  'reserved_restore' => '恢复默认',
  'privacy_policy_desc' => '在此处编辑您的隐私政策，可以使用HTML语言',
  'tos_desc' => '在此处编辑您的使用条款，可以使用HTML',
  'require_user_verify' => '管理短连接要求用户验证Email',
  'require_user_verify_help' => '如果用户Email未经核实则不允许创建、编辑和管理他们的短链接',
  'custom_html' => '自定义 HTML、JS与CSS',
  'custom_html_help' => '在此处添加您的JS代码，将在站点底部加载',
  'save_changes' => '保存更改',
  'success' => '设置已更新！',
];
