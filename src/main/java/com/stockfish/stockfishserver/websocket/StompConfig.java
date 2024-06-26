package com.stockfish.stockfishserver.websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class StompConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // 메시지 브로커를 설정하여 /sub 경로를 구독합니다.
        registry.enableSimpleBroker("/sub");
         // 클라이언트가 메시지를 보낼 때 사용하는 경로의 접두사
        registry.setApplicationDestinationPrefixes("/pub");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) { // WebSocket 엔드포인트 /ws를 설정합니다.
        registry.addEndpoint("/ws").withSockJS();// SockJS를 사용하여 WebSocket을 지원합니다.
        registry.addEndpoint("/ws").setAllowedOrigins("*");  // 모든 도메인에서 접근을 허용합니다.
    }

}