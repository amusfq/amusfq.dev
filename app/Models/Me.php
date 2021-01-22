<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Me extends Model
{
    use HasFactory;

    protected $table = 'me';
    protected $fillable = [
        'header',
        'scroll',
        'tentang',
        'download',
        'more',
        'projects',
        'skills',
        'contact',
    ];
}
