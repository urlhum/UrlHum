<?php

/*
 * UrlHum (https://urlhum.com)
 *
 * @link      https://github.com/urlhum/UrlHum
 * @copyright Copyright (c) 2019 Christian la Forgia
 * @license   https://github.com/urlhum/UrlHum/blob/master/LICENSE.md (MIT License)
 */

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'Необходимо принять :attribute.',
    'active_url' => 'Значение :attribute не является допустимым URL-адресом.',
    'after' => 'Значение :attribute должно быть дата после :date.',
    'after_or_equal' => ':attribute должен быть позже или равен :date.',
    'alpha' => 'Поле :attribute может содержать только буквы.',
    'alpha_dash' => ':attribute может содержать только буквы, цифры, тире и подчеркивания.',
    'alpha_num' => ':attribute может содержать только буквы и цифры.',
    'array' => 'Значение :attribute должно быть массивом.',
    'before' => 'Значение :attribute должно быть дата до :date.',
    'before_or_equal' => 'В поле :attribute должна быть дата до или равняться :date.',
    'between' => [
        'numeric' => 'Значение :attribute должно быть между :min и :max.',
        'file' => ':attribute должен быть от :min до :max килобайт.',
        'string' => ':attribute должен содержать не меньше :min и не больше :max символов.',
        'array' => ':attribute должен содержать :min - :max элементов.',
    ],
    'boolean' => 'Поле :attribute должно быть истинным или ложным.',
    'confirmed' => 'Поле :attribute не совпадает с подтверждением.',
    'date' => ':attribute не является допустимой датой.',
    'date_equals' => 'Значение :attribute должно быть дата после :date.',
    'date_format' => 'Значение :attribute не соответствует формату :format.',
    'different' => 'Поля :attribute и :other должны различаться.',
    'digits' => 'Длина цифрового поля :attribute должна быть :digits.',
    'digits_between' => 'Значение :attribute должно быть между :min и :max цифр.',
    'dimensions' => 'Поле :attribute имеет недопустимые размеры изображения.',
    'distinct' => 'Поле :attribute содержит повторяющееся значение.',
    'email' => 'Значение :attribute должно быть действительным адресом электронной почты.',
    'exists' => 'Выбранное значение :attribute недопустимо.',
    'file' => 'Поле :attribute должно быть файлом.',
    'filled' => 'Поле :attribute обязательно для заполнения.',
    'gt' => [
        'numeric' => 'Поле :attribute должно быть больше :value.',
        'file' => ':attribute должен быть больше чем :value килобайт.',
        'string' => 'Количество символов в поле :attribute должно быть больше :value.',
        'array' => 'Количество элементов в поле :attribute должно быть больше :value.',
    ],
    'gte' => [
        'numeric' => ':attribute должено быть равно или больше :value.',
        'file' => 'Размер файла в поле :attribute должен быть больше или равен :value Килобайт(а).',
        'string' => 'Количество символов в поле :attribute должно быть больше или равно :value.',
        'array' => ':attribute должен иметь :value элементов или больше.',
    ],
    'image' => ':attribute должно быть изображением.',
    'in' => 'Выбранное значение :attribute недопустимо.',
    'in_array' => 'Поле :attribute не существует в :other.',
    'integer' => ':attribute должен быть целым числом.',
    'ip' => ':attribute должен быть верным IP-адресом.',
    'ipv4' => ':attribute должен быть корректным IPv4-адресом.',
    'ipv6' => ':attribute должен быть корректным IPv6-адресом.',
    'json' => ':attribute должно быть корректной JSON строкой.',
    'lt' => [
        'numeric' => ':attribute должно быть меньше чем :value.',
        'file' => ':attribute должен быть меньше чем :value килобайт.',
        'string' => ':attribute должен быть меньше чем :value символов.',
        'array' => ':attribute должно иметь меньше чем :value элементов.',
    ],
    'lte' => [
        'numeric' => 'Поле :attribute должно быть меньше или равно :value.',
        'file' => ':attribute должен быть меньше или равен :value килобайт.',
        'string' => 'Количество символов в поле :attribute должно быть меньше или равно :value.',
        'array' => ':attribute не должен содержать больше чем :value элементов.',
    ],
    'max' => [
        'numeric' => ':attribute не должно быть больше :max.',
        'file' => ':attribute не должен превышать :max килобайт.',
        'string' => ':attribute не должно превышать :max символов.',
        'array' => ':attribute не может содержать больше чем :max элементов.',
    ],
    'mimes' => ':attribute должен быть файлом типа: :values.',
    'mimetypes' => ':attribute должен быть файлом типа: :values.',
    'min' => [
        'numeric' => 'Поле :attribute должно быть не менее :min.',
        'file' => 'Значение :attribute должно быть по крайней мере :min килобайт.',
        'string' => 'Значение :attribute должно быть не меньше :min символов.',
        'array' => 'Значение :attribute должно быть по крайней мере :min позиций.',
    ],
    'not_in' => 'Выбранный :attribute неправильный.',
    'not_regex' => 'Неправильный формат :attribute.',
    'numeric' => ':attribute должен быть числовым.',
    'present' => 'Поле :attribute должно присутствовать.',
    'regex' => 'Неправильный формат :attribute.',
    'required' => ':attribute обязательное поле.',
    'required_if' => 'Значение :attribute является обязательным, когда :other является :value.',
    'required_unless' => 'Поле :attribute обязательно, если :other не из :values.',
    'required_with' => 'Значение :attribute обязательно, когда все из следующих значений :values существуют.',
    'required_with_all' => ':attribute обязательно для заполнения, когда имеется :values.',
    'required_without' => 'Поле :attribute является обязательным, если :values не заполнены.',
    'required_without_all' => 'Значение :attribute требуется, когда ни одно из следующих значений :values не существует.',
    'same' => ':attribute и :other должны совпадать.',
    'size' => [
        'numeric' => ':attribute должен быть :size.',
        'file' => ':attribute должно быть объемом :size килобайт.',
        'string' => ':attribute должен состоять из :size символов.',
        'array' => ':attribute должен содержать :size элементов.',
    ],
    'starts_with' => ':attribute должен начинаться с одного из: :values',
    'string' => 'Поле :attribute должно быть строкой.',
    'timezone' => 'Поле :attribute должно быть действительным часовым поясом.',
    'unique' => ':attribute уже занят.',
    'uploaded' => 'Загрузка поля :attribute не удалась.',
    'url' => 'Неправильный формат :attribute.',
    'uuid' => ':attribute должен быть действительным UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'настраиваемое сообщение',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
