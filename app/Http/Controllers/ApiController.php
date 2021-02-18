<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use stdClass;

class ApiController extends Controller
{
    public function getAll()
    {
        return DB::table('todos')->get();
    }

    public function add(Request $request)
    {
        $title = $request->input('title');

        DB::table('todos')->insert(
            ['title' => $title, 'completed' => 0]
        );

        return var_dump('test');
    }

    public function completedChange(Request $request)
    {
        $id = $request->input('id');
        $completed = $request->input('completed');

        DB::table('todos')
              ->where('id', $id)
              ->update(['completed' => $completed]);

        return var_dump('test');
    }

    public function delete(Request $request)
    {
        $id = $request->input('id');

        DB::table('todos')->where('id', '=', $id)->delete();

        return var_dump('test');
    }
}
