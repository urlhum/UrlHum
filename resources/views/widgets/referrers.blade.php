<div class="col-xl-5">
    <div class="card shadow">
        <div class="card-header border-0">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="mb-0">{{ __('analytics.referer.best') }}</h3>
                </div>
                <div class="col text-right">
                    <a href="{{ route('url.referers') }}" class="btn btn-sm btn-primary">{{ __('url.all') }}</a>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <!-- Projects table -->
            <table class="table align-items-center table-flush">
                <thead class="thead-light">
                <tr>
                    <th scope="col">{{ __('analytics.referer.referer') }}</th>
                    <th scope="col">{{ __('analytics.click.clicks') }}</th>
                    <th scope="col">{{ __('analytics.click.reals') }}</th>
                </tr>
                </thead>
                <tbody>
                @foreach ($referers as $referer)
                <tr>
                    <th scope="row">
                        @if (empty($referer->referer))
                            {{ __('analytics.referer.direct_unknown') }}
                        @else
                            {{$referer->referer}}
                        @endif
                    </th>
                    <td>
                        {{$referer->clicks}}
                    </td>
                    <td>
                        {{$referer->real_clicks}}
                    </td>
                </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>