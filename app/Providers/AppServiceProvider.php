<?php

namespace App\Providers;

use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Tighten\Ziggy\Ziggy;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    //
  }

  /**
   * Bootstrap any application services.
   */
  public function boot(UrlGenerator $url)
  {
    if (env("APP_ENV") === "production") {
      $url->forceScheme("https");
    }

    Inertia::share("ziggy", function () {
      return new Ziggy()->toArray();
    });
  }
}
