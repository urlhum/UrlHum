@extends('layouts.app', ['title' => trans('analytics.show.title') . ' ' . $url ])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid col-lg-10 col-md-12">
        <div class="header-body">
            <div class="row">
                <div class="container-fluid">
                    <div class="col">
                        <div class="card shadow">
                            <div class="card-header d-flex justify-content-between">
                                <h1>{{ __('analytics.show.title') }}
                                    <a href="{{ url('/') }}/{{$url}}">{{ $url }}</a>
                                </h1>

                                <div>
                                <button type="button" class="btn btn-info" id="qrModalButton" data-toggle="modal" data-target="#QRCodeModal">
                                    <i class="fa fa-qrcode"></i> {{ __('url.qrcode') }}
                                </button>
                                    @if ($isOwnerOrAdmin)
                                        <a href="{{ url('/') }}/url/{{$url}}" class="btn btn-success">{{ __('url.edit.edit') }}</a>
                                    @endif
                                </div>
                            </div>
                            <div class="card-body">
                                <p>{{ __('url.created', ['date' => $creationDate]) }}</p>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card card-stats mb-4 mb-lg-0">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col">
                                                            <h5 class="card-title text-uppercase text-muted mb-0">
                                                                {{ __('analytics.click.clicks') }}</h5>
                                                            <span class="h2 font-weight-bold mb-0">{{$clicks}}</span>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                                                                <i class="fa fa-mouse-pointer"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card card-stats mb-4 mb-lg-0">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col">
                                                            <h5 class="card-title text-uppercase text-muted mb-0">
                                                                {{ __('analytics.click.reals') }}</h5>
                                                            <span class="h2 font-weight-bold mb-0">{{$realClicks}}</span>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape bg-success text-white rounded-circle shadow">
                                                                <i class="fa fa-hand-pointer"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card card-stats mb-4 mb-lg-0">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col">
                                                            <h5 class="card-title text-uppercase text-muted mb-0">
                                                                {{ __('analytics.click.today') }}</h5>
                                                            <span class="h2 font-weight-bold mb-0">{{$todayClicks}}</span>
                                                        </div>
                                                        <div class="col-auto">
                                                            <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                                <i class="fas fa-clock"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h1 class="mt-4">{{ __('analytics.click.latests') }}</h1>
                                <div class="d-flex justify-content-between" id="latest-clicks">
                                    @if ($latestClicks->count())
                                        <div class="table-responsive">
                                            <table class="table align-items-center">
                                                <thead class="thead-light">
                                                <tr>
                                                    <th scope="col">{{ __('analytics.referer.referer') }}</th>
                                                    <th scope="col">{{ __('analytics.time') }}</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @foreach ($latestClicks as $data => $click)
                                                    <tr>
                                                        <td>
                                                            @if (empty($click->referer))
                                                                {{ __('analytics.referer.direct_unknown') }}
                                                            @else
                                                                {{ $click->referer }}
                                                            @endif
                                                        </td>
                                                        <td>
                                                            {{ $click->created_at->diffForHumans() }}
                                                        </td>
                                                        @endforeach
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    @else
                                        <p>{{ __('analytics.click.na') }}</p>
                                    @endif
                                </div>

                                <hr>
                                <h1>{{ __('analytics.country.real') }}</h1>
                                @if (count($countriesClicks) > 0)
                                    <div class="chart">
                                        <!-- Chart wrapper -->
                                        <canvas id="chart-pie-countries-real"></canvas>
                                    </div>
                                @else
                                    <p>{{ __('analytics.country.na') }}</p>
                                @endif
                                <hr>
                                <h1>{{ __('analytics.country.views') }}</h1>
                                @if (count($countriesClicks) > 0)
                                    <div class="chart">
                                        <!-- Chart wrapper -->
                                        <canvas id="chart-pie-countries"></canvas>
                                    </div>
                                @else
                                    <p>{{ __('analytics.country.na') }}</p>
                                @endif
                                <hr>

                                <div style="display: flex; justify-content: space-between" id="referrers-table">
                                    <h1>{{ __('analytics.referer.referers') }}</h1>
                                    <p> {{ __('analytics.referer.list.results', [
                                        'firstItem' => $referers->firstItem(),
                                        'lastItem' => $referers->lastItem(),
                                        'num' => $referers->total()
                                        ]) }}</p>
                                </div>
                                <div id="table-component" class="tab-pane tab-example-result fade active show"
                                     role="tabpanel" aria-labelledby="table-component-tab">
                                    <div class="table-responsive">
                                        @if ($referers->count())
                                            <table class="table align-items-center">
                                                <thead class="thead-light">
                                                <tr>
                                                    <th scope="col">{{ __('url.url') }}</th>
                                                    <th scope="col">{{ __('analytics.click.clicks') }}</th>
                                                    <th scope="col">{{ __('analytics.click.reals') }}</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @foreach ($referers as $referer)
                                                    <tr>
                                                        <th scope="row">
                                                            @if (empty($referer->referer))
                                                                <p>{{ __('analytics.referer.direct_unknown') }}</p>
                                                            @else
                                                                <p>
                                                                    <a href="{{$referer->referer}}">{{$referer->referer}}</a>
                                                                </p>
                                                            @endif
                                                        </th>
                                                        <td>
                                                            <p>{{$referer->clicks}}</p>
                                                        </td>
                                                        <td>
                                                            <p>{{$referer->real_clicks}}</p>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                                </tbody>
                                            </table>
                                        @else
                                            <p>{{ __('analytics.referer.na') }}</p>
                                        @endif
                                    </div>
                                </div>
                                {{ $referers->fragment('referrers-table')->links() }}
                            </div>

                            @include('url.partials.qrcodemodal', ['url' => $url])
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
    <script src="{{ asset('argon') }}/vendor/chart.js/dist/Chart.extension.js"></script>
    <script>
        var ctx = document.getElementById('chart-pie-countries-real').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    @foreach ($countriesClicks as $country)
                        '{{$country->country_full}}',
                    @endforeach
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [
                        @foreach ($countriesClicks as $country)
                        {{$country->real_views}},
                        @endforeach
                    ],
                    backgroundColor: [
                        @foreach ($countriesColor as $color)
                            'rgba({{$color}}, 0.5)',
                        @endforeach
                    ],
                    borderColor: [
                        @foreach ($countriesColor as $color)
                            'rgba({{$color}}, 1)',
                        @endforeach
                    ],
                    borderWidth: 1
                }]
            },
        });
    </script>
    <script>
        var ctx = document.getElementById('chart-pie-countries').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    @foreach ($countriesClicks as $country)
                        '{{$country->country_full}}',
                    @endforeach
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [
                        @foreach ($countriesClicks as $country)
                        {{$country->views}},
                        @endforeach
                    ],
                    backgroundColor: [
                        @foreach ($countriesColor as $color)
                            'rgba({{$color}}, 0.5)',
                        @endforeach
                    ],
                    borderColor: [
                        @foreach ($countriesColor as $color)
                            'rgba({{$color}}, 1)',
                        @endforeach
                    ],
                    borderWidth: 1
                }]
            },
        });
    </script>
@endpush