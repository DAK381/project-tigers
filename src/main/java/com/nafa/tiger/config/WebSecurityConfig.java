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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.nafa.tiger.service.CustomUserDetailService;

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
//	
//	 @Bean
//	    public DaoAuthenticationProvider authenticationProvider() {
//	        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//	        authProvider.setUserDetailsService(userDetailsService());
//	        authProvider.setPasswordEncoder(passwordEncoder());
//	         
//	        return authProvider;
//	    }
//	
////	
//	
//	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(customUserDetailService).passwordEncoder(passwordEncoder()); 
	}
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable() 
//        	.authorizeRequests()
//        	.antMatchers("/register").permitAll()
//            .antMatchers("/users").authenticated()
//            .anyRequest().permitAll()
//            .and()
//            .formLogin()
//            	.loginPage("http://localhost:3000/log-in")
//                .usernameParameter("email")
//                .defaultSuccessUrl("/users")
//                .permitAll()
//            .and()
//            .logout().logoutSuccessUrl("/").permitAll();
//	}
//	  
////	  @Bean
////	    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////	        http
////	                .cors()
////	                .and()
////	                .csrf()
////	                .disable()
////	                .authorizeHttpRequests()
////	                .antMatchers(WHITE_LIST_URLS).permitAll()
////	                .antMatchers("/api/**").authenticated()
////	                .and()
////	                .oauth2Login(oauth2login ->
////	                        oauth2login.loginPage("/oauth2/authorization/api-client-oidc"))
////	                .oauth2Client(Customizer.withDefaults());
////
////	        return http.build();
////	    }
////    @Override
////    protected void configure(HttpSecurity http) throws Exception {
////
////        http.antMatcher("/**")
////                .authorizeRequests()
////                .antMatchers("/", "/login**")
////                .permitAll()
////                .anyRequest()
////                .authenticated();
////
////    }
//
//
//
	private static final String[] WHITE_LIST_URLS= {
			
			"/register",
			"/resendVerifyToken*",
			"/verifyRegistration*",
			"/",
			"/login"
	};
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
//	@Autowired
//	private UserService userService;
//	@Autowired
//	private  BCryptPasswordEncoder bCryptPasswordEncoder;
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
			.usernameParameter("email_address")
			.defaultSuccessUrl("http://localhost:3000/register")
			.permitAll()
			.and()
			.logout().logoutSuccessUrl("/").permitAll();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
		.authenticationEntryPoint(authenticationEntryPoint).and()
		.authorizeRequests((request) -> request.antMatchers(WHITE_LIST_URLS).permitAll()
				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated())
		.addFilterBefore(new JWTAuthenticationFilter(customUserDetailService, jWTTokenHelper),
				UsernamePasswordAuthenticationFilter.class);


	

}
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		// TODO Auto-generated method stub
//		auth.authenticationProvider(doaAuthenticationProvider() );
//		}
	
//	@Bean
//	public DaoAuthenticationProvider daoAuthenticationProvider() {
//		DaoAuthenticationProvider provider = 
//				new DaoAuthenticationProvider();
//		provider.setPasswordEncoder(bCryptPasswordEncoder);
//		provider.setUserDetailsService((UserDetailsService) userService);
//		return provider;
//		
//	}
//@Bean
//public DaoAuthenticationProvider doaAuthenticationProvider() {
//    DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//    authProvider.setUserDetailsService(userDetailsService());
//    authProvider.setPasswordEncoder(passwordEncoder());
//     
//    return authProvider;
//}	
	
	
	
		
	
}
