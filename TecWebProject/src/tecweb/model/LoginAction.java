package tecweb.model;

import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport implements SessionAware{
	private String username, password;
	private Map<String, Object> session;

	public Map<String, Object> getSession() {
		return session;
	}

	public void setSession(Map<String, Object> session) {
		this.session = session;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String home() {
		return SUCCESS;
	}
	
	public String logOut() {
		session.remove("username");
		return SUCCESS;
	}
	
	public String login() {
		if (username.equals("admin") && password.equals("admin")) {
			session.put("username", username);
			return SUCCESS;
		} else {
			return LOGIN;
		}
	}
	
	public String register() {
		if(!username.isEmpty()&&!password.isEmpty()) {
			session.put("username", username);
			return SUCCESS;
		} else {
			return ERROR;
		}
	}
		
}
