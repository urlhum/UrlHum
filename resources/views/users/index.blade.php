@extends('layouts.app', ['title' => trans('account.users')])

@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7">
    </div>
    <div class="container-fluid col-lg-6 col-md-8 col-sm-12">
        <div class="header-body">
            <div class="row">
                <div class="container-fluid">
                    <div class="col">
                        <div class="card shadow">
                            <div class="card-header border-0">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h3 class="mb-0">{{ __('account.users') }}</h3>
                                    </div>
                                    <div class="col-4 text-right">
                                        <a href="{{ route('user.create') }}"
                                           class="btn btn-sm btn-primary">{{ __('account.add') }}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                @if (session('status'))
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        {{ session('status') }}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                @endif
                            </div>

                            <div class="table-responsive">
                                <table class="table align-items-center table-flush">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">{{ __('account.name') }}</th>
                                        <th scope="col">{{ __('account.email') }}</th>
                                        <th scope="col">{{ __('account.creation_date') }}</th>
                                        <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($users as $user)
                                        <tr>
                                            <td>{{ $user->name }}</td>
                                            <td>
                                                <a href="mailto:{{ $user->email }}">{{ $user->email }}</a>
                                            </td>
                                            <td>{{ $user->created_at->format('m/d/Y H:i') }}</td>
                                            <td class="text-right">
                                                <div class="dropdown">
                                                    <a class="btn btn-sm btn-icon-only text-light" href="#"
                                                       role="button" data-toggle="dropdown" aria-haspopup="true"
                                                       aria-expanded="false">
                                                        <i class="fas fa-ellipsis-v"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                        @if ($user->id != auth()->id())
                                                            <form action="{{ route('user.destroy', $user) }}"
                                                                  method="post">
                                                                @csrf
                                                                @method('delete')

                                                                <a class="dropdown-item"
                                                                   href="{{ route('user.edit', $user) }}">{{ __('urlhum.edit') }}</a>
                                                                <button type="button" class="dropdown-item"
                                                                        onclick="confirm('{{ __("account.delete.confirm") }}') ? this.parentElement.submit() : ''">
                                                                    {{ __('account.delete.delete') }}
                                                                </button>
                                                            </form>
                                                        @else
                                                            <a class="dropdown-item"
                                                               href="{{ route('profile.edit') }}">{{ __('urlhum.edit') }}</a>
                                                        @endif
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer py-4">
                                <nav class="d-flex justify-content-end" aria-label="...">
                                    {{ $users->links() }}
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
    <script src="{{ asset('argon') }}/vendor/chart.js/dist/Chart.min.js"></script>
    <script src="{{ asset('argon') }}/vendor/chart.js/dist/Chart.extension.js"></script>
@endpush