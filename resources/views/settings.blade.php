@extends('layouts.app', ['title' => trans('settings.system')])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid col-lg-10 col-md-12">
        <div class="header-body">
            <div class="card col-lg-8 col-md-12 col-sm-12 d-md-flex ml-md-auto mr-md-auto">
                <div class="row">
                    <div class="card shadow">
                        <div class="card-header border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
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

                        <div class="card-body">
                            <form action="{{ route('settings.save') }}" method="POST"
                                  enctype="multipart/form-data">
                                @csrf
                                <div class="col-12">

                                    <h1>{{ __('settings.general') }}</h1>

                                    <div class="form-group row mb-5 mt-4">
                                        <label for="website_name"
                                               class="col-sm-4 col-md-6 col-form-label">{{ __('settings.website_name') }}</label>
                                        <div class="col-sm-8 col-md-6">
                                            <input class="form-control" type="text" name="website_name"
                                                   value="{{ $settings['website_name'] }}">
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="website_image"
                                               class="col-sm-4 col-md-6 col-form-label">{{ __('settings.website_image') }}</label>
                                        <div class="col-sm-8 col-md-6">
                                            <img src="{{ $settings['website_image'] }}"
                                                 class="w-25 img-fluid img-thumbnail float-right">
                                            <input type="file" class="form-control-file m-2"
                                                   name="website_image">
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="website_favicon"
                                               class="col-sm-4 col-md-6 col-form-label">
                                            {{ __('settings.website_favicon') }}
                                        </label>
                                        <div class="col-sm-8 col-md-6 float-right">
                                            <img src="{{ $settings['website_favicon'] }}"
                                                 class="w-25 img-fluid img-thumbnail float-right">
                                            <input type="file" class="form-control-file m-2"
                                                   name="website_favicon">
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="private_site"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.private') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.private_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <label class="custom-toggle float-right">
                                                <input type="hidden" name="private_site" value="0">
                                                <input @if ($settings['private_site'] == 1) checked
                                                       @endif
                                                       type="checkbox" name="private_site"
                                                       value="1">
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="unauthorized_redirect"
                                               class="col-sm-4 col-md-6 col-form-label">
                                            {{ __('settings.unauthorized_redirect') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.unauthorized_redirect_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <input class="form-control" type="text" name="unauthorized_redirect"
                                                   value="{{ setting('unauthorized_redirect') }}"
                                                   placeholder="{{ __('settings.unauthorized_redirect_placeholder') }}"
                                                   >
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="registration"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.registration') }}
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <label class="custom-toggle float-right">
                                                <input type="hidden" name="registration" value="0">
                                                <input @if ($settings['registration'] == 1) checked
                                                       @endif
                                                       type="checkbox" name="registration"
                                                       value="1">
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="show_guests_latest_urls"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.public') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.public_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <label class="custom-toggle float-right">
                                                <input type="hidden" name="show_guests_latests_urls"
                                                       value="0">
                                                <input @if ($settings['show_guests_latests_urls'] == 1) checked
                                                       @endif
                                                       type="checkbox"
                                                       name="show_guests_latests_urls"
                                                       value="1">
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                    </div>


                                    <div class="form-group row mb-5">
                                        <label for="enable_privacy_policy"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.privacy_policy') }}
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <button style="display: none;" type="button"
                                                    class="btn btn-primary" id="editPrivacyBtn"
                                                    data-toggle="modal" data-target="#privacyModal">
                                                {{ __('settings.privacy_policy_edit') }}
                                            </button>
                                            <label class="custom-toggle float-right">
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
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="enable_terms_of_use"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.tos') }}
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <button style="display: none;" type="button"
                                                    class="btn btn-primary" id="editTermsBtn"
                                                    data-toggle="modal" data-target="#TermsModal">
                                                {{ __('settings.tos_edit') }}
                                            </button>
                                            <label class="custom-toggle float-right">
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
                                        </div>
                                    </div>

                                    <hr>
                                    <h1>{{ __('analytics.analytics') }}</h1>

                                    <div class="form-group row mb-5 mt-4">
                                        <label for="hash_ip"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.hash') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.hash_anon_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <label class="custom-toggle float-right">
                                                <label class="custom-toggle float-right">
                                                    <input type="hidden" name="hash_ip" value="0">
                                                    <input @if ($settings['hash_ip'] == 1) checked
                                                           @endif
                                                           type="checkbox" name="hash_ip" value="1">
                                                    <span class="custom-toggle-slider rounded-circle"></span>
                                                </label>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5 mt-4">
                                        <label for="anonymize_ip"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.anonymize_ip') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.hash_anon_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <label class="custom-toggle float-right">
                                                <input type="hidden" name="anonymize_ip" value="0">
                                                <input @if ($settings['anonymize_ip'] == 1) checked
                                                       @endif
                                                       type="checkbox" name="anonymize_ip"
                                                       value="1">
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5 mt-4">
                                        <label for="disable_referers"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.disable_referers') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.disable_referers_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <label class="custom-toggle float-right">
                                                <input type="hidden" name="disable_referers" value="0">
                                                <input @if ($settings['disable_referers'] == 1) checked
                                                       @endif
                                                       type="checkbox" name="disable_referers"
                                                       value="1">
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <hr>
                                    <h1>{{ __('url.short') }}</h1>

                                    <div class="form-group row mb-5 mt-4">
                                        <label for="require_user_verify"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.require_user_verify') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.require_user_verify_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <label class="custom-toggle float-right">
                                                <input type="hidden" name="require_user_verify"
                                                       value="0">
                                                <input @if ($settings['require_user_verify'] == 1) checked
                                                       @endif
                                                       type="checkbox" name="require_user_verify"
                                                       value="1">
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="anonymous_urls"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.anonymous') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.anonymous_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <label class="custom-toggle float-right">
                                                <input type="hidden" name="anonymous_urls"
                                                       value="0">
                                                <input @if ($settings['anonymous_urls'] == 1) checked
                                                       @endif
                                                       type="checkbox" name="anonymous_urls"
                                                       value="1">
                                                <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="deleted_urls_can_be_recreated"
                                               class="col-sm-4 col-md-6">
                                            {{ __('settings.deleted') }}
                                        </label>
                                        <div class="col-sm-8 col-md-6">
                                            <label class="custom-toggle float-right">
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
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="reservedShortUrls"
                                               class="col-sm-2 col-md-4">
                                            {{ __('settings.reserved') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.reserved_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-10 col-md-8">
                                            <textarea class="form-control" id="reservedShortUrls"
                                                      name="reservedShortUrls"
                                                      rows="10">{{$settings['reservedShortUrls']}}</textarea>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-5">
                                        <label for="deleted_urls_can_be_recreated"
                                               class="col-sm-2 col-md-4">
                                            {{ __('settings.custom_html') }}
                                            <i class="fa fa-question-circle"
                                               data-toggle="tooltip"
                                               data-placement="top"
                                               title="{{ __('settings.custom_html_help') }}">
                                            </i>
                                        </label>
                                        <div class="col-sm-10 col-md-8">
                                            <textarea class="form-control" id="custom_html"
                                                      name="custom_html"
                                                      rows="10">{{$settings['custom_html']}}</textarea>
                                        </div>
                                    </div>


                                    <button type="submit"
                                            class="btn btn-default">{{ __('urlhum.save') }}
                                    </button>

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
                                </div>

                            </form>
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
