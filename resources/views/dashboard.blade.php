@extends('layouts.app', ['title' => __('urlhum.dashboard')])

@section('content')
    @include('layouts.headers.cards')
    <div class="container-fluid col-lg-8  col-md-10 col-sm-12 mt--7">
        @if (Auth::check() || setting('anonymous_urls'))
            @include('widgets/create-url')
        @endif
        <div class="row mt-5">
            @isset($publicUrls)
                @include('widgets/latests-urls')
            @endisset

            @isset($referers)
                @include('widgets/referrers')
            @endisset
        </div>
        @include('layouts.footers.auth')
    </div>
@endsection

@push('js')
    <script src="/js/app.js"></script>
@endpush