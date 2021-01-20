<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Portfolio;


class AppController extends Controller
{
    public function index() {
        $data = Portfolio::get();
        return Inertia::render('Index', ['data' => $data]);
    }
}
