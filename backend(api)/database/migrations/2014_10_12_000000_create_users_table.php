<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->char('status', 255)->nullable();
            $table->char('first_name', 255)->nullable();
            $table->char('last_name', 255)->nullable();
            $table->char('middle_name', 255)->nullable();
            $table->char('phone', 255)->nullable();
            $table->date('birth_date')->nullable();
            $table->char('sex', 255)->nullable();
            $table->char('country', 255)->nullable();
            $table->char('city', 255)->nullable();
            $table->text('achievements')->nullable();
            $table->integer('have_team')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
