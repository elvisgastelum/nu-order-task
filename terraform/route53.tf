data "aws_route53_zone" "website_route_zone" {
  name = var.website_zone
}

resource "aws_route53_record" "website_route_record" {
  zone_id = data.aws_route53_zone.website_route_zone.id
  name    = var.website_subdomain
  type    = "A"

  alias {
    name                   = replace(aws_cloudfront_distribution.website.domain_name, "/[.]$/", "")
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "validation" {
  name    = aws_acm_certificate.cert.domain_validation_options.0.resource_record_name
  type    = aws_acm_certificate.cert.domain_validation_options.0.resource_record_type
  zone_id = data.aws_route53_zone.website_route_zone.zone_id
  records = ["${aws_acm_certificate.cert.domain_validation_options.0.resource_record_value}"]
  ttl     = "60"
}