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
        Schema::create('courses', function (Blueprint $table) {

            $table->id();

            // Course Information
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');

            // Image
            $table->string('image');

            // Course Details
            $table->string('duration');
            $table->unsignedInteger('students')->default(0);
            $table->decimal('rating', 2, 1)->default(5.0);

            // Relationship
            $table->foreignId('instructor_id')
                ->constrained()
                ->cascadeOnDelete();

            // Status
            $table->boolean('status')->default(true);

            $table->timestamps();
        });
    }

    // /**
    //  * Reverse the migrations.
    //  */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
