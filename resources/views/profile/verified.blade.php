@extends('layouts.app', ['class' => 'bg-default', 'title' => trans('account.verified_title')])

@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7">
    </div>

    <div class="container mt-6 col-lg-8 col-md-10 col-sm-12 m-auto">
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="border-0">
                    <div class="alert alert-success ">
                        <div class="text-center mb-4">
                            <p>{{ __('account.verified_title') }}</p>
                        </div>
                        <div>
                            {{ __('account.verified') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
