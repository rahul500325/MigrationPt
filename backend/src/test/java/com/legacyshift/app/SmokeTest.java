package com.legacyshift.app;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Proves the Surefire provider resolves offline AND that the security
 * auto-configuration starts cleanly. Without the second assertion, a broken
 * filter chain would only surface at runtime inside a sandbox.
 */
@SpringBootTest
class SmokeTest {

  @Autowired private SecurityFilterChain securityFilterChain;

  @Test
  void contextLoadsWithSecurityConfigured() {
    assertThat(securityFilterChain).isNotNull();
  }
}
