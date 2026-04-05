# Analytics & Revenue Tracking Setup

## 1. Google Analytics (Free)
Add to your `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 2. Amazon Affiliate Tracking
Your links already include: `?tag=bigterry20036-20`
This tracks all purchases from your links.

## 3. Temu Affiliate Tracking  
Your links include: `?ref=alg041956`
This tracks clicks and conversions.

## 4. Conversion Goals to Track
- Product page views
- "View on Amazon/Temu" button clicks
- Checkout completions (for digital products)

## 5. Revenue Monitoring
Check:
- Amazon Associates dashboard
- Temu affiliate portal
- PayPal for digital product sales
- Google Analytics for traffic trends
