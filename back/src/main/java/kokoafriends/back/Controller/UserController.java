package kokoafriends.back.Controller;

import kokoafriends.back.model.oauth.OauthToken;
import kokoafriends.back.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/oauth/token")
    public OauthToken getLogin(@RequestParam("code") String code){

        OauthToken oauthToken = userService.getAccessToken("code");

        return oauthToken;

    }
}