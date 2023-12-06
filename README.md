# school-work

### ContractedCompanies 테이블
| company_id | company_name | affiliation | saramin_url          | image_url          | user_id |
|------------|--------------|-------------|----------------------|--------------------|---------|
| 1          | Company A    | Affiliate X | https://companyA.com | https://imageA.com | 1       |
| 2          | Company B    | Affiliate Y | https://companyB.com | https://imageB.com | 2       |


### Users 테이블
| user_id | github_id   | profile_url           | name   | generation | role      | graduation_status |
|---------|-------------|-----------------------|--------|------------|-----------|-------------------|
| 1       | userA_github| https://github.com/userA | User A | 2022       | Engineer  | Graduated         |
| 2       | userB_github| https://github.com/userB | User B | 2023       | Designer  | Graduating        |


### JobOpenings 테이블
| opening_id | company_name | saramin_url             | job_position      | affiliation | user_id |
|------------|--------------|-------------------------|-------------------|-------------|---------|
| 1          | Company A    | https://companyA.com/jobs| Software Developer| Affiliate X | 1       |
| 2          | Company B    | https://companyB.com/jobs| UX Designer       | Affiliate Y | 2       |

### 삽입 이상
새로운 사용자를 삽입할 때, 강의 코드와 강의명 속성에 null 값이 들어가야 하는 문제가 발생합니다.

### 갱신 이상
특정 사용자의 정보를 수정할 때, 일부만 수정되어 데이터 모순이 발생합니다.

### 삭제 이상
어떤 정보를 삭제하면 의도하지 않은 다른 정보까지 삭제되는 문제가 발생합니다.
