package gmit.ie.sw.FYPproject.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gmit.ie.sw.FYPproject.models.User;
import gmit.ie.sw.FYPproject.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    //instance
    @Autowired
    UserRepository userRepository;

    //retrieves a user from the repo
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        return UserDetailsImpl.build(user);
    }

}