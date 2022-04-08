package com.nafa.tiger.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.nafa.tiger.entity.User;
import com.nafa.tiger.service.CustomUserDetailService;
import com.nafa.tiger.service.UserService;

import lombok.AllArgsConstructor;


//import com.nafa.tiger.service.CustomUserDetailService;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
	

	
	@Autowired
	private CustomUserDetailService customUserDetailService;
	@Autowired
	private JWTTokenHelper jWTTokenHelper;

	@Autowired
	private RestAuthenticationEntryPoint authenticationEntryPoint;
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(11);
	}

  	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		auth.userDetailsService(customUserDetailService).passwordEncoder(passwordEncoder()); 
	}

	private static final String[] WHITE_LIST_URLS= {
			
			"/register",
			"/resendVerifyToken*",
			"/verifyRegistration*",
			"/",
			"/auth/login"
	};
	@Bean
	@Override
	public AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}
	


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// TODO Auto-generated method stub
		http
			.csrf().disable()
			.cors().and()
			.headers().frameOptions()
			.disable();
		http
			.formLogin()
			.loginPage("http://localhost:3000/log-in")
			.usernameParameter("email")
			.defaultSuccessUrl("http://localhost:3000", true)
			.permitAll()
			.and()
			.logout().logoutSuccessUrl("/").permitAll();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
		.authenticationEntryPoint(authenticationEntryPoint).and()
		.authorizeRequests((request) -> request.antMatchers(WHITE_LIST_URLS).permitAll()
			//	.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated()
				)
		.addFilterBefore(new JWTAuthenticationFilter(customUserDetailService, jWTTokenHelper),
				UsernamePasswordAuthenticationFilter.class);

	}

}
