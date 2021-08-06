<?php


namespace App\Http\Controllers;


use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Bridge\AccessToken;
use Laravel\Sanctum\PersonalAccessToken;

class AccessTokenController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $tokens = $user->tokens()->get();
        return view('auth.access-tokens', [
            'tokens' => $tokens
        ]);
    }

    public function store(Request $request)
    {
        $token = $request->user()->createToken($request->name);

        $request->session()->put('new-created-token.name', $token->accessToken->name);
        $request->session()->put('new-created-token.plain', $token->plainTextToken);

        return redirect()->route('access_token.index');
    }

    public function delete(Request $request)
    {
        $tokenId = $request->request->get('token-id');

        /** @var User $user */
        $user = Auth::user();

        $user->tokens()->where('id', $tokenId)->delete();

        return redirect()->route('access_token.index')->with('success', 'Token deleted successfully.');
    }

}