package com.loginmodule.dao;

import com.loginmodule.model.User;
import com.loginmodule.util.HibernateUtil;

public class UserDaoImpl implements UserDao{
	
	HibernateUtil hibernateUtil = new HibernateUtil();

	@Override
	public User findUserByEmail(String email) {
		hibernateUtil.openCurrentSession();
		
		User user =(User)hibernateUtil.getCurrentSession().createQuery("from User where email='"+email+"' and isActive=1").uniqueResult();
		
		hibernateUtil.closeCurrentSession();
		
		return user;
	}

}
