@extends('layouts.app', ['class' => 'bg-default', 'title' => trans('account.verify')])

@section('content')
    @include('layouts.headers.guest')

    <div class="container mt--8 pb-5">
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>{{ __('account.verify') }}</small>
                        </div>
                        <div>
                            @if (session('resent'))
                                <div class="alert alert-success" role="alert">
                                    {{ __('account.verify_sent') }}
                                </div>
                            @endif
                            
                            {{ __('account.verify_proceed') }}
                            
                            @if (Route::has('verification.resend'))
                                {{ __('account.verify_resend') }}, <a href="{{ route('verification.resend') }}">{{ __('account.verify_resend_2') }}</a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
