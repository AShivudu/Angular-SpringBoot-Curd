package in.shivudu.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import in.shivudu.model.User;

public interface UserRepository extends JpaRepository<User,Integer> {
    List<User> findByEmail(String email);
}
