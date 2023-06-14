<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'gender',
        'birthday',
        'avatar',
        'profile_cover',
        'profile_url',
        'avatar',
        'phone_nr',
        'country',
        'city',
        'workplace',
        'high_school',
        'college',
        'website',
        'bio',
        'email',
        'relationship_status',
    ];
}
