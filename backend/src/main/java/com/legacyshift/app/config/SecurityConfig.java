package com.legacyshift.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Baseline security for a freshly seeded sandbox: everything permitted.
 *
 * <p>Spring Security defaults to locking every endpoint behind a generated
 * password, which would break the template's own health check before any
 * reprojection work begins. Specs that reproject authorization replace this
 * chain; they never start from a broken scaffold.
 */
@Configuration
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth.anyRequest().permitAll());
    return http.build();
  }
}
