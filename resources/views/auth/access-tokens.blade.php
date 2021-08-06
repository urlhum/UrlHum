@extends('layouts.app', ['title' => 'Access Tokens'])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid">
        <div class="header-body">
            <div class="card">
                <div class="card-header border-0">
                    <h1>Access tokens</h1>
                </div>
                <div class="card-body">
                    @if(Session::has('success'))
                        <div class="alert alert-success">
                            {{ Session::remove('success') }}
                        </div>
                    @endif

                    @if(Session::has('new-created-token.plain'))
                        <div id="created-token" class="alert alert-primary">
                            <h3 class="alert-heading">
                                Your newly created token
                                <strong>{{ Session::remove('new-created-token.name') }}</strong> is
                            </h3>

                            <div class="card mb-3">
                                <input aria-label="token" type="text"
                                       value="{{ Session::remove('new-created-token.plain') }}" disabled>
                            </div>

                            Be sure to copy this token in a safe place. When you close the page the token will be lost.
                        </div>
                    @endif

                    <p>You can create a new Access Token, view your current access tokens or delete one of them.</p>
                    <form class="form-inline" id="new-token" action="{{ route('access_token.store') }}" method="post">
                        @csrf
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="name" class="sr-only">Token Name</label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="Token name">
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Create New</button>
                    </form>

                    <table class="table mt-4">
                        <thead>
                        <tr>
                            <th>Token name</th>
                            <th>Last used at</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach ($tokens as $token)
                            <tr>
                                <td>
                                    {{ $token->name }}
                                </td>
                                <td>
                                    {{ $token->last_used_at ?? 'Never' }}
                                </td>
                                <td>
                                    <form method="POST" action="{{ route('access_token.delete') }}" class="delete-token-form">
                                        @method('delete')
                                        @csrf
                                        <input type="hidden" name="token-id" value="{{ $token->id }}">
                                        <button class="btn btn-sm btn-danger">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        @include('layouts.footers.auth')
    </div>

@endsection

@push('js')
    <script src="/js/app.js"></script>
    <script>
        $('.delete-token-form').on('submit', function (evt) {
           evt.preventDefault();
           let res = confirm('Are you sure you want to delete this token? You will not be able to use it anymore');
           if (res) {
               $(this).unbind('submit').submit();
           }
        });
    </script>
@endpush