import request from '@/utils/request'
// 订单确认
// mode: cart    => obj { cartIds }
// mode: buyNow  => obj { goodsId  goodsNum  goodsSkuId }
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // cart   buynow
      delivery: 10, // 10代表快递配送 20是门店自提
      couponId: 0, // 优惠券id，传0不使用
      isUsePoints: 0, // 积分，传0，不使用积分
      ...obj // 将传递过来的参数对象 动态展开
    }
  })
}
// 提交订单
// mode: cart    => obj { cartIds remark }
// mode: buyNow  => obj { goodsId  goodsNum  goodsSkuId }
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10, // 10代表快递配送 20是门店自提
    couponId: 0, // 优惠券id，传0不使用
    isUsePoints: 0, // 积分，传0，不使用积分
    payType: 10, // 余额支付
    ...obj
  })
}
// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
