package com.cts.training.dao.impl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.cts.training.dao.StockExchangeDAO;
import com.cts.training.hibernate.HibernateUtil;
import com.cts.training.model.Company;
import com.cts.training.model.StockExchange;

public class StockExchangeDAOImpl implements StockExchangeDAO{
	
	SessionFactory sessionFactory = HibernateUtil.getSessionFactory();


	@Override
	public boolean saveStockExchange(StockExchange se) {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			session.save(se);
			tx.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean updateStockExchange(StockExchange se) {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			session.update(se);
			tx.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean daleteStockExchange(StockExchange se) {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			session.delete(se);
			tx.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public StockExchange getStockExchangeById(int id) {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			StockExchange se = session.get(StockExchange.class, id);

			tx.commit();
			session.close();
			return se;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<StockExchange> getAllStockExchanges() {
		try {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			List<StockExchange> ses = session.createQuery("from StockExchange").list();
			tx.commit();
			session.close();
			return ses;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

}
	