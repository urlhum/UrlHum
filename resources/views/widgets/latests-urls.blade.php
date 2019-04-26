<div class="
@if ($data['anonymous'] OR !isAdmin())
        col-12
@else
        col-xl-7
@endif
        mb-5 mb-xl-0">
    <div class="card shadow">
        <div class="card-header border-0">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="mb-0">{{ __('url.latest') }}</h3>
                </div>
                <div class="col text-right">
                    <a href="{{ route('url.public') }}" class="btn btn-sm btn-primary">{{ __('url.all') }}</a>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <!-- Projects table -->
            <table class="table align-items-center table-flush">
                <thead class="thead-light">
                <tr>
                    <th scope="col">{{ __('url.short') }}</th>
                    <th scope="col">{{ __('url.long') }}</th>
                    <th scope="col">{{ __('analytics.view.views') }}</th>
                    @if (isAdmin())
                    <th scope="col">{{ __('url.action') }}</th>
                    @endif
                </tr>
                </thead>
                <tbody>
                @foreach ($data['publicUrls'] as $publicUrl)
                    <tr>
                        <th scope="row">
                            {{$publicUrl->short_url}}
                        </th>
                        <td>
                            {{$publicUrl->long_url }}
                        </td>
                        <td>
                            {{$publicUrl->clicks}}
                        </td>
                        @if (isAdmin())
                        <td>
                            <a href="/url/{{$publicUrl->short_url}}">
                                <button type="button" class="btn btn-success btn-sm btn-url-edit"><i
                                            class="fa fa-pencil-alt" alt="Edit"> </i> {{ __('urlhum.edit') }}
                                </button>
                            </a>
                        </td>
                        @endif
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

