@extends('layouts.app',
[
'class' => 'bg-default',
    'title' => trans('account.sign_up', [
        'site' => setting('website_name')
    ])
])

@section('content')
    @include('layouts.headers.guest')

    <div class="container mt--8 pb-5">
        <!-- Table -->
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
                <div class="card bg-secondary shadow border-0">

                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <h3>{{ __('account.sign_up',
                            [
                                'site' => setting('website_name')
                            ]) }}</h3>
                        </div>
                        <form role="form" method="POST" action="{{ route('register') }}">
                            @csrf

                            <div class="form-group{{ $errors->has('name') ? ' has-danger' : '' }}">
                                <div class="input-group input-group-alternative mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                                    </div>
                                    <input class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" placeholder="{{ __('account.name') }}" type="text" name="name" value="{{ old('name') }}" required autofocus>
                                </div>
                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" style="display: block;" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group{{ $errors->has('email') ? ' has-danger' : '' }}">
                                <div class="input-group input-group-alternative mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                    </div>
                                    <input class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" placeholder="{{ __('account.email') }}" type="email" name="email" value="{{ old('email') }}" required>
                                </div>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" style="display: block;" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group{{ $errors->has('password') ? ' has-danger' : '' }}">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" placeholder="{{ __('account.password.password') }}" type="password" name="password" required>
                                </div>
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" style="display: block;" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input class="form-control" placeholder="{{ __('account.password.confirm') }}" type="password" name="password_confirmation" required>
                                </div>
                            </div>
                            @if (setting('enable_privacy_policy') OR setting('enable_terms_of_use'))
                            <div class="row my-4">
                                <div class="col-12">
                                    <div class="custom-control custom-control-alternative custom-checkbox">
                                        <input class="custom-control-input" name="signUpCheck" id="customCheckRegister" type="checkbox" value="1">
                                        <label class="custom-control-label" for="customCheckRegister">
                                            <span class="text-muted">{{ __('account.agreement') }}
                                                @if (setting('enable_privacy_policy'))
                                                    <a href="{{ route('privacy') }}">{{ __('urlhum.privacypolicy') }}</a>
                                                @endif
                                                @if (setting('enable_privacy_policy') AND (setting('enable_terms_of_use')))
                                                     {{ __('urlhum.and') }}
                                                @endif
                                                @if (setting('enable_terms_of_use'))
                                                    <a href="{{ route('tos') }}">{{ __('urlhum.termsofuse') }}</a>
                                                @endif
                                                </span>
                                        </label>
                                    </div>
                                    @if ($errors->has('signUpCheck'))
                                        <span class="invalid-feedback" style="display: block;" role="alert">
                                        <strong>{{ __('account.agreement_error') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>
                            @endif
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary mt-4">{{ __('account.create') }}</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('js')
    <script src="/js/app.js"></script>
@endpush