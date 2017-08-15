1. http://start.spring.io/

2.注解：

```
@SpringBootApplication   程序入口  //与controller不再一个下面需要配置扫描的包
(
分开解释@Configuration,@EnableAutoConfiguration,@ComponentScan。

1)@Configuration：提到@Configuration就要提到他的搭档@Bean。使用这两个注解就可以创建一个简单的spring配置类，可以用来替代相应的xml配置文件@Configuration的注解类标识这个类可以使用Spring IoC容器作为bean定义的来源。@Bean注解告诉Spring，一个带有@Bean的注解方法将返回一个对象，该对象应该被注册为在Spring应用程序上下文中的bean。

2)@EnableAutoConfiguration：能够自动配置spring的上下文，试图猜测和配置你想要的bean类，通常会自动根据你的类路径和你的bean定义自动配置。

3)@ComponentScan：会自动扫描指定包下的全部标有@Component的类，并注册成bean，当然包括@Component下的子注解@Service,@Repository,@Controller。
)

@RestController  一个构造型（stereotype）注解

@RequestMapping   请求路由

@EnableAutoConfiguration  这个注解告诉Spring Boot根据添加的jar依赖猜测你想如何配置Spring。由于spring-boot-starter-web添加了Tomcat和Spring MVC，所以auto-configuration将假定你正在开发一个web应用并相应地对Spring进行设置


@RequestBody 将HTTP请求正文转换为适合的HttpMessageConverter对象。
@ResponseBody 将内容或对象作为 HTTP 响应正文返回，并调用适合HttpMessageConverter的Adapter转换对象，写入输出流。



@SpringBootTest
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK,classes = DemoApplication.class)

MOCK —提供一个Mock的Servlet环境，内置的Servlet容器并没有真实的启动，主要搭配使用@AutoConfigureMockMvc

RANDOM_PORT — 提供一个真实的Servlet环境，也就是说会启动内置容器，然后使用的是随机端口 
DEFINED_PORT — 这个配置也是提供一个真实的Servlet环境，使用的默认的端口，如果没有配置就是8080 
NONE — 这是个神奇的配置，跟Mock一样也不提供真实的Servlet环境。
```

