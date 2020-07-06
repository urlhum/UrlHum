@extends('layouts.app', ['title' => trans('account.edit')])

@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7">
    </div>
    <div class="container-fluid col-lg-6 col-sm-10 m-auto">
        <div class="header-body">
            <div class="row">
                <div class="container-fluid">
                    <div class="col">
                        <div class="card bg-secondary shadow">
                            <div class="card-header bg-white border-0">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h3 class="mb-0">{{ __('account.edit') }}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <form method="post" action="{{ route('profile.update') }}" autocomplete="off">
                                    @csrf
                                    @method('put')

                                    <h6 class="heading-small text-muted mb-4">{{ __('account.information') }}</h6>

                                    @if (session('status'))
                                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                                            {{ session('status') }}
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    @endif

                                    <div class="pl-lg-4">
                                        <div class="form-group{{ $errors->has('name') ? ' has-danger' : '' }}">
                                            <label class="form-control-label" for="input-name">{{ __('account.name') }}</label>
                                            <input type="text" name="name" id="input-name"
                                                   class="form-control form-control-alternative{{ $errors->has('name') ? ' is-invalid' : '' }}"
                                                   placeholder="{{ __('account.name') }}"
                                                   value="{{ old('name', auth()->user()->name) }}" required autofocus>

                                            @if ($errors->has('name'))
                                                <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('name') }}</strong>
                                        </span>
                                            @endif
                                        </div>
                                        <div class="form-group{{ $errors->has('email') ? ' has-danger' : '' }}">
                                            <label class="form-control-label"
                                                   for="input-email">{{ __('account.email') }}</label>
                                            <input type="email" name="email" id="input-email"
                                                   class="form-control form-control-alternative{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                                   placeholder="{{ __('account.email') }}"
                                                   value="{{ old('email', auth()->user()->email) }}" required>

                                            @if ($errors->has('email'))
                                                <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                            @endif
                                        </div>

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-success mt-4">{{ __('urlhum.save') }}</button>
                                        </div>
                                    </div>
                                </form>
                                <hr class="my-4"/>
                                <form method="post" action="{{ route('profile.password') }}" autocomplete="off">
                                    @csrf
                                    @method('put')

                                    <h6 class="heading-small text-muted mb-4">{{ __('account.password.password') }}</h6>

                                    @if (session('password_status'))
                                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                                            {{ session('password_status') }}
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    @endif

                                    <div class="pl-lg-4">
                                        <div class="form-group{{ $errors->has('old_password') ? ' has-danger' : '' }}">
                                            <label class="form-control-label"
                                                   for="input-current-password">{{ __('account.password.current') }}</label>
                                            <input type="password" name="old_password" id="input-current-password"
                                                   class="form-control form-control-alternative{{ $errors->has('old_password') ? ' is-invalid' : '' }}"
                                                   placeholder="{{ __('account.password.current') }}" value="" required>

                                            @if ($errors->has('old_password'))
                                                <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('old_password') }}</strong>
                                        </span>
                                            @endif
                                        </div>
                                        <div class="form-group{{ $errors->has('password') ? ' has-danger' : '' }}">
                                            <label class="form-control-label"
                                                   for="input-password">{{ __('account.password.new') }}</label>
                                            <input type="password" name="password" id="input-password"
                                                   class="form-control form-control-alternative{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                                   placeholder="{{ __('account.password.new') }}" value="" required>

                                            @if ($errors->has('password'))
                                                <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                            @endif
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label"
                                                   for="input-password-confirmation">{{ __('account.password.confirm') }}</label>
                                            <input type="password" name="password_confirmation"
                                                   id="input-password-confirmation"
                                                   class="form-control form-control-alternative"
                                                   placeholder="{{ __('account.password.confirm') }}" value="" required>
                                        </div>

                                        <div class="text-center">
                                            <button type="submit"
                                                    class="btn btn-success mt-4">{{ __('account.password.change') }}</button>
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
    @include('layouts.footers.auth')
@endsection