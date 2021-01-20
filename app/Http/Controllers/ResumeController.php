<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Resume;

class ResumeController extends Controller
{
    public function index() {

        $data = Resume::first();
        return Inertia::render('Resume', ['data' => $data]);
    }
}
