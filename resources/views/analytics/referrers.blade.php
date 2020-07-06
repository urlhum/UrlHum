@extends('layouts.app', ['title' => trans('analytics.referer.referers')])
@section('content')

    <div class="header bg-gradient-primary mb-3 pt-6 d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid col-lg-6 col-md-8 col-sm-10 col-12">
        <div class="header-body">
            <div class="card">
                <div class="row">
                    <div class="col">
                        <div class="card shadow">
                            <div class="card-header border-0">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h1 class="mb-0">{{ __('analytics.referer.referers') }}</h1>
                                    </div>
                                    <div class="col-4 text-right">
                                        <a href="{{route('url.list')}}" class="btn btn-sm btn-primary">{{ __('url.list') }}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table align-items-center table-flush">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">{{ __('analytics.referer.referer') }}</th>
                                        <th scope="col">{{ __('analytics.click.clicks') }}</th>
                                        <th scope="col">{{ __('analytics.click.reals') }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($referrers as $referrer)
                                        <tr>
                                            <td>
                                                @if (empty($referrer->referer))
                                                    {{ __('analytics.referer.direct_unknown') }}
                                                @else
                                                    {{$referrer->referer}}
                                                @endif
                                            </td>
                                            <td>{{$referrer->clicks}}</td>
                                            <td>{{$referrer->real_clicks}}</td>
                                        </tr>
                                    @endforeach

                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer py-4">
                                <nav class="d-flex" aria-label="..." style="justify-content: space-between">
                                    <p class="pull-left">
                                        {{ __('analytics.referer.list.results', [
                                        'firstItem' => $referrers->firstItem(),
                                        'lastItem' => $referrers->lastItem(),
                                        'num' => $referrers->total()
                                        ]) }}
                                    </p>
                                    <div class="pull-right">
                                        {{ $referrers->links() }}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @include('layouts.footers.auth')

        </div>
    </div>

@endsection
@push('js')

    <script src="/js/app.js"></script>
@endpush