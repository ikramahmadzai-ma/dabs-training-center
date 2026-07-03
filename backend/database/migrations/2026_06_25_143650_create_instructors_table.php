<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('instructors', function (Blueprint $table) {

            $table->id();

            // Instructor Information
            $table->string('name');
            $table->string('position');
            $table->string('image');

            // Contact Information
            $table->string('email')->unique()->nullable();
            $table->string('phone')->nullable();

            // Biography
            $table->text('bio')->nullable();

            // Status
            $table->boolean('status')->default(true);

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructors');
    }
};
