package kokoafriends.back.Controller;

import kokoafriends.back.model.oauth.OauthToken;
import kokoafriends.back.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://192.168.1.185:3000")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/oauth/callback/kakao/token")
    public OauthToken getLogin(@RequestParam("code") String code){

        OauthToken oauthToken = userService.getAccessToken("code");
        System.out.println("oauthToken");
        return oauthToken;
    }
}