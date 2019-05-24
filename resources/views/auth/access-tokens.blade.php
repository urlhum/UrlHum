@extends('layouts.app', ['title' => 'access tokens'])
@section('content')
    <div class="header bg-gradient-primary mb-3 pt-6 	d-none d-lg-block d-md-block pt-md-7"></div>
    <div class="container-fluid">
        <div class="header-body">
            <div class="card">
                <div class="card-header border-0">
                    <h1>Access tokens</h1>
                </div>
                <div class="card-body">
                    <p>You can create a new Access Token, view your current access tokens or delete one of them.</p>
                    <form class="form-inline" id="new-token" action="/oauth/personal-access-tokens" method="post">
                        @csrf
                        <div class="form-group mx-sm-3 mb-2">
                            <label for="name" class="sr-only">Token Name</label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="Token name">
                        </div>
                        <button type="submit" class="btn btn-facebook mb-2">Create New</button>
                    </form>
                </div>

                <div id="pat-container">
                    <div id="loading">
                        <p class="text-center">Loading...</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="modal fade" id="newToken" tabindex="-1" role="dialog" aria-labelledby="newToken" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">New Access Token</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>This is your new Access Token. <strong>Attention:</strong> save it in a safe place!
                            You will see it just this time.</p>
                        <div class="alert alert-success">
                        <code id="new-access-token" class="text-white"></code>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        @include('layouts.footers.auth')
    </div>

@endsection

@push('js')
    <script src="/js/app.js"></script>
    <script>
        $(document).ready(function () {
            jQuery.get("/oauth/personal-access-tokens", function (data) {
                for (i in data) {
                    $('#pat-container').append(
                        '<div class="card card-shadow"><div class="container"><div class="row p-4"><div class="col-md-6">' +
                        '<strong>' + data[i]['name'] + '</strong>' +
                        '</div> <div class="col-md-6">' +
                        '<p><span class="badge badge-primary">Created at</span> ' + data[i]['created_at'] + '</p>' +
                        '<p><span class="badge badge-danger">Expires at</span> ' + data[i]['expires_at'] + '</p>' +
                        '<button class="btn btn-sm btn-danger" onclick="delete_pat(\'' + data[i]['id'] + '\')">Delete</button>' +
                        '</div></div></div></div>'
                    );
                }
                $('#loading').hide();
            });

            $("#new-token").submit(function (e) {
                e.preventDefault();
                let form = $(this);

                $.ajax({
                    type: "POST",
                    url: '/oauth/personal-access-tokens',
                    data: form.serialize(),
                    success: function(data) {
                        $('#new-access-token').append(data['accessToken']);
                        $('#newToken').modal();
                    },
                });
            });

            $("#newToken").on("hidden.bs.modal", function () {
                location.reload();
            });

        });


        function delete_pat(token) {
            if (confirm('Are you sure you want to delete this Token?')) {
                $.ajax({
                    url: '/oauth/personal-access-tokens/' + token,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    type: 'DELETE',
                    success: location.reload(),
                });
            }
        }
    </script>
@endpush