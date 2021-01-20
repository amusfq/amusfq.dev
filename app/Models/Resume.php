<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $table = 'data_diri';
    protected $fillable = [
        'nama',
        'pekerjaan',
        'foto',
        'email',
        'no_telp',
        'tentang_saya',
        'pendidikan',
        'pengalaman',
        'pengetahuan_industri',
        'teknologo_dan_alat',
        'kemampuan_lain',
        'bahasa',
        'social_media',
    ];
}
