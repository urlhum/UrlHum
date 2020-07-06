@extends('layouts.app',  ['title' => trans('url.public')])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid col-lg-10 col-md-12">
        <div class="header-body">
            <div class="card">
                <div class="row">
                    <div class="col">
                        <div class="card shadow">
                            <div class="card-header border-0">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h3 class="mb-0">{{ __('url.public') }}</h3>
                                    </div>
                                    <div class="col-4 text-right">
                                        <a href="{{ route('home') }}" class="btn btn-sm btn-primary">{{ __('url.new') }}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table align-items-center table-flush">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">{{ __('url.short')  }}</th>
                                        <th scope="col">{{ __('url.long') }}</th>
                                        <th scope="col">{{ __('analytics.analytics') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($urls as $url)
                                        <tr>
                                            <td>
                                                <a href="/{{$url->short_url}}">{{$url->short_url}}</a>
                                            </td>
                                            <td>
                                                <a href="{{$url->long_url}}">{{$url->long_url}}</a>
                                            </td>
                                            <td>
                                                <a href="/{{$url->short_url}}+" class="mr-2">
                                                    <i class="fa fa-chart-bar fa-2x"></i>
                                                </a>
                                                {{$url->clicks}} {{ __('analytics.click.clicks') }}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer py-4">
                                <nav class="d-flex justify-content-between" aria-label="...">
                                    <p class="pull-left">
                                        {{ __('url.listres', [
                                            'firstItem' => $urls->firstItem(),
                                            'lastItem' => $urls->lastItem(),
                                            'num' => $urls->total()
                                        ]) }}
                                    </p>
                                    <div class="pull-right">
                                        {{ $urls->links() }}
                                    </div>
                                </nav>
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
@endpush