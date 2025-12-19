# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e11]:
        - link "test logo" [ref=e13] [cursor=pointer]:
          - /url: /
          - img "test logo" [ref=e14]
        - generic [ref=e15]:
          - heading "How does AI help me stay up-to-date with industry trends in Test Automation?" [level=3] [ref=e16]
          - paragraph [ref=e17]: Al-powered tools are constantly evolving, incorporating the latest testing methodologies and frameworks. As part of your training, you'll learn to work with these cutting-edge tools, which keeps your skillset current.
      - generic [ref=e18]:
        - button [ref=e19] [cursor=pointer]
        - button [ref=e20] [cursor=pointer]
        - button [ref=e21] [cursor=pointer]
    - generic [ref=e23]:
      - heading "Login to your account" [level=1] [ref=e24]
      - paragraph [ref=e25]: Enter the details you used in creating your account 🔐
      - generic [ref=e26]:
        - generic [ref=e27]:
          - generic [ref=e28]: Email
          - generic [ref=e29]:
            - generic:
              - img
            - textbox "Email" [ref=e30]:
              - /placeholder: you@example.com
        - generic [ref=e31]:
          - generic [ref=e32]: Password
          - generic [ref=e33]:
            - img [ref=e35]
            - button [ref=e39] [cursor=pointer]:
              - img [ref=e40]
            - textbox "Password" [ref=e43]:
              - /placeholder: Enter your password
        - button "Login" [ref=e44] [cursor=pointer]:
          - generic [ref=e45]: Login
  - alert [ref=e46]
```