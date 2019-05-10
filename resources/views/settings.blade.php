@extends('layouts.app', ['title' => trans('settings.system')])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7">
    </div>
    <div class="container-fluid">
        <div class="header-body">
            <div class="row">
                <div class="container-fluid">
                    <div class="col">
                        <div class="card shadow">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h1 class="text-center">{{ __('settings.system') }}</h1>
                                    </div>
                                    @if( Session::has('success'))
                                        <div class="col-12">
                                            <div class="alert alert-success pb-0">
                                                <p class="text-center">{{ Session::get('success') }}</p>
                                            </div>
                                        </div>
                                    @endif
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="container">
                                    <div class="row">
                                        @if ($settings['anonymize_ip'] == 1 && $settings['hash_ip'] == 0)
                                            <div class="alert alert-danger">
                                                <p> {{ __('settings.anon_hash_alert') }}</p>
                                            </div>
                                        @endif

                                        @if ($errors->any())
                                            <div class="alert alert-danger">
                                                {{ __('urlhum.error') }}:
                                                <ul>
                                                    @foreach ($errors->all() as $error)
                                                        <li>{{ $error }}</li>
                                                    @endforeach
                                                </ul>
                                            </div>
                                        @endif


                                        <div class="table-responsive table-settings">
                                            <form action="{{ route('settings.save') }}" method="POST"
                                                  enctype="multipart/form-data">
                                                @csrf
                                                <table class="table align-items-center table-borderless">
                                                    <tbody>

                                                    <tr>
                                                        <td>
                                                            <h1>{{ __('settings.general') }}</h1>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><p>{{ __('settings.website_name') }}</p></td>
                                                        <td class="text-right">
                                                            <input class="form-control" type="text" name="website_name"
                                                                   value="{{ $settings['website_name'] }}">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <p>{{ __('settings.website_image') }}</p>
                                                        </td>
                                                        <td class="text-right">
                                                            <img src="{{ $settings['website_image'] }}"
                                                                 class="w-25 img-fluid img-thumbnail">
                                                            <div class="form-group">
                                                                <input type="file" class="form-control-file"
                                                                       name="website_image">
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <p>{{ __('settings.website_favicon') }}</p>
                                                        </td>
                                                        <td class="text-right">
                                                            <img src="{{ $settings['website_favicon'] }}"
                                                                 class="w-25 img-fluid img-thumbnail">
                                                            <div class="form-group">
                                                                <input type="file" class="form-control-file"
                                                                       name="website_favicon">
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td><p>{{ __('settings.private') }}
                                                                <i class="fa fa-question-circle"
                                                                   data-toggle="tooltip"
                                                                   data-placement="top"
                                                                   title="{{ __('settings.private_help') }}">
                                                                </i>
                                                            </p></td>
                                                        <td class="text-right">
                                                            <label class="custom-toggle">
                                                                <input type="hidden" name="private_site" value="0">
                                                                <input @if ($settings['private_site'] == 1) checked
                                                                       @endif
                                                                       type="checkbox" name="private_site"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><p>{{ __('settings.registration') }}</p></td>
                                                        <td class="text-right">
                                                            <label class="custom-toggle">
                                                                <input type="hidden" name="registration" value="0">
                                                                <input @if ($settings['registration'] == 1) checked
                                                                       @endif
                                                                       type="checkbox" name="registration"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td><p>{{ __('settings.public')  }}
                                                                <i class="fa fa-question-circle"
                                                                   data-toggle="tooltip"
                                                                   data-placement="top"
                                                                   title="{{ __('settings.public_help') }}">
                                                                </i>
                                                            </p></td>
                                                        <td class="text-right">
                                                            <label class="custom-toggle">
                                                                <input type="hidden" name="show_guests_latests_urls"
                                                                       value="0">
                                                                <input @if ($settings['show_guests_latests_urls'] == 1) checked
                                                                       @endif
                                                                       type="checkbox"
                                                                       name="show_guests_latests_urls"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><p>{{ __('settings.privacy_policy') }}</p>
                                                        </td>
                                                        <td class="text-right">

                                                            <button style="display: none;" type="button"
                                                                    class="btn btn-primary" id="editPrivacyBtn"
                                                                    data-toggle="modal" data-target="#privacyModal">
                                                                {{ __('settings.privacy_policy_edit') }}
                                                            </button>

                                                            <label class="custom-toggle pull-right">
                                                                <input type="hidden" name="enable_privacy_policy"
                                                                       value="0">
                                                                <input @if ($settings['enable_privacy_policy'] == 1) checked
                                                                       @endif
                                                                       type="checkbox"
                                                                       name="enable_privacy_policy"
                                                                       id="enablePrivacyPolicy"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>

                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><p>{{ __('settings.tos') }}</p>
                                                        </td>
                                                        <td class="text-right">

                                                            <button style="display: none;" type="button"
                                                                    class="btn btn-primary" id="editTermsBtn"
                                                                    data-toggle="modal" data-target="#TermsModal">
                                                                {{ __('settings.tos_edit') }}
                                                            </button>

                                                            <label class="custom-toggle pull-right">
                                                                <input type="hidden" name="enable_terms_of_use"
                                                                       value="0">
                                                                <input @if ($settings['enable_terms_of_use'] == 1) checked
                                                                       @endif
                                                                       type="checkbox"
                                                                       name="enable_terms_of_use"
                                                                       id="enableTermsOfUse"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>

                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td>
                                                            <h1>{{ __('analytics.analytics') }}</h1>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <p>{{ __('settings.hash') }}
                                                                <i class="fa fa-question-circle"
                                                                   data-toggle="tooltip"
                                                                   data-placement="top"
                                                                   title="{{ __('settings.hash_anon_help') }}">
                                                                </i>
                                                            </p></td>
                                                        <td class="text-right">
                                                            <label class="custom-toggle">
                                                                <input type="hidden" name="hash_ip" value="0">
                                                                <input @if ($settings['hash_ip'] == 1) checked
                                                                       @endif
                                                                       type="checkbox" name="hash_ip" value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><p>{{ __('settings.anonymize_ip') }}
                                                                <i class="fa fa-question-circle"
                                                                   data-toggle="tooltip"
                                                                   data-placement="top"
                                                                   title="{{ __('settings.hash_anon_help') }}">
                                                                </i>
                                                            </p>
                                                        </td>
                                                        <td class="text-right">
                                                            <label class="custom-toggle">
                                                                <input type="hidden" name="anonymize_ip" value="0">
                                                                <input @if ($settings['anonymize_ip'] == 1) checked
                                                                       @endif
                                                                       type="checkbox" name="anonymize_ip"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><p>{{ __('settings.disable_referers') }}
                                                                <i class="fa fa-question-circle"
                                                                   data-toggle="tooltip"
                                                                   data-placement="top"
                                                                   title="{{ __('settings.disable_referers_help') }}">
                                                                </i>
                                                            </p>
                                                        </td>
                                                        <td class="text-right">
                                                            <label class="custom-toggle">
                                                                <input type="hidden" name="disable_referers" value="0">
                                                                <input @if ($settings['disable_referers'] == 1) checked
                                                                       @endif
                                                                       type="checkbox" name="disable_referers"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <h1>{{ __('url.short') }}</h1>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="border:0px;">
                                                            <p>{{ __('settings.require_user_verify') }}
                                                                <i class="fa fa-question-circle"
                                                                   data-toggle="tooltip"
                                                                   data-placement="top"
                                                                   title="{{ __('settings.require_user_verify_help') }}">
                                                                </i>
                                                            </p>
                                                        </td>
                                                        <td style="border:0px;" class="text-right">
                                                            <label class="custom-toggle">
                                                                <input type="hidden" name="require_user_verify"
                                                                       value="0">
                                                                <input @if ($settings['require_user_verify'] == 1) checked
                                                                       @endif
                                                                       type="checkbox" name="require_user_verify"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="border:0px;">
                                                            <p>{{ __('settings.anonymous') }}
                                                                <i class="fa fa-question-circle"
                                                                   data-toggle="tooltip"
                                                                   data-placement="top"
                                                                   title="{{ __('settings.anonymous_help') }}">
                                                                </i>
                                                            </p>
                                                        </td>
                                                        <td style="border:0px;" class="text-right">
                                                            <label class="custom-toggle">
                                                                <input type="hidden" name="anonymous_urls"
                                                                       value="0">
                                                                <input @if ($settings['anonymous_urls'] == 1) checked
                                                                       @endif
                                                                       type="checkbox" name="anonymous_urls"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td><p>{{ __('settings.deleted') }}</p></td>
                                                        <td class="text-right">
                                                            <label class="custom-toggle">
                                                                <input type="hidden"
                                                                       name="deleted_urls_can_be_recreated"
                                                                       value="0">
                                                                <input @if ($settings['deleted_urls_can_be_recreated'] == 1) checked
                                                                       @endif
                                                                       type="checkbox"
                                                                       name="deleted_urls_can_be_recreated"
                                                                       value="1">
                                                                <span class="custom-toggle-slider rounded-circle"></span>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><p>{{ __('settings.reserved') }}
                                                                <i class="fa fa-question-circle"
                                                                   data-toggle="tooltip"
                                                                   data-placement="top"
                                                                   title="{{ __('settings.reserved_help') }}">
                                                                </i></p>
                                                            <textarea class="form-control" id="reservedShortUrls"
                                                                      name="reservedShortUrls"
                                                                      rows="10">{{$settings['reservedShortUrls']}}</textarea>
                                                        </td>
                                                        <td>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><p>{{ __('settings.custom_html') }}
                                                                <i class="fa fa-question-circle"
                                                                   data-toggle="tooltip"
                                                                   data-placement="top"
                                                                   title="{{ __('settings.custom_html_help') }}">
                                                                </i></p>
                                                            <textarea class="form-control" id="custom_html"
                                                                      name="custom_html"
                                                                      rows="10">{{$settings['custom_html']}}</textarea>
                                                        </td>
                                                        <td></td>
                                                    </tr>


                                                    <tr class="send-tr">
                                                        <td></td>
                                                        <td class="text-right">
                                                            <button type="submit"
                                                                    class="btn btn-default">{{ __('urlhum.send') }}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>

                                                <div class="modal fade" id="privacyModal" tabindex="-1" role="dialog"
                                                     aria-labelledby="privacyModal" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h1 class="modal-title"
                                                                    id="privacyModal">{{ __('urlhum.privacypolicy') }}</h1>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                        aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <p>{{ __('settings.privacy_policy_desc') }}</p>
                                                                <textarea class="form-control" id="privacy-policy"
                                                                          name="privacy_policy"
                                                                          rows="15">{{$settings['privacy_policy']}}
                                                                </textarea>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                        data-dismiss="modal">{{ __('urlhum.close') }}</button>
                                                                <button type="submit"
                                                                        class="btn btn-primary">{{ __('settings.save_changes') }}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="modal fade" id="TermsModal" tabindex="-1" role="dialog"
                                                     aria-labelledby="termsModal" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h1 class="modal-title"
                                                                    id="termsModal">{{ __('urlhum.termsofuse') }}</h1>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                        aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <p>{{ __('settings.tos_desc') }}</p>
                                                                <textarea class="form-control" id="terms-of-use"
                                                                          name="terms_of_use"
                                                                          rows="15">{{$settings['terms_of_use']}}
                                                                </textarea>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                        data-dismiss="modal">{{ __('urlhum.close') }}</button>
                                                                <button type="submit"
                                                                        class="btn btn-primary">{{ __('settings.save_changes') }}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('layouts.footers.auth')
    </div>


@endsection
@push('js')
    <script src="/js/app.js"></script>
    <script>
        $(document).ready(function () {
            if ($('#enablePrivacyPolicy').prop('checked') === true) {
                $('#editPrivacyBtn').show();
            }

            $('#enablePrivacyPolicy').on('change', function () {
                $('#editPrivacyBtn').toggle();
            });

            if ($('#enableTermsOfUse').prop('checked') === true) {
                $('#editTermsBtn').show();
            }

            $('#enableTermsOfUse').on('change', function () {
                $('#editTermsBtn').toggle();
            });

        });
    </script>
@endpush